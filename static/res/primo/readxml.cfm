
<cfset param1 = url['filename']>
<cfset param2 = url['start']>
<cfset param3 = url['stop']>
<cfset param4 = url['format']>
<cfset param5 = url['altstart']>


<cfxml variable="addNewRecord">
    <record>	
    </record>
</cfxml>

<cfif #param4# eq "m">

	<cfset myxmldoc= XmlParse("http://www.whitman.edu/penrose/library/new_items/#param1#.xml")>

	<cfset xmlbiglist = XmlSearch(myxmldoc, '/collection/record[(position() > #param2#) and not(position() > #param3#)]')>

	<cfset myxmlColl = XmlParse("http://www.whitman.edu/penrose/library/new_items/start.xml")>
	<cfset xmlCollection = XmlSearch(myxmlColl, 'collection')>

	<cfset ArrayDeleteAt(xmlCollection[1].XmlChildren, 1)>

	<cfloop from="1" to="#ArrayLen(xmlbiglist)#" index="i" >
		<cfset addNewRecord.record.XmlText = ToString(i)&"-"/>
		<cfset XmlAppend(xmlCollection[1], addNewRecord) />
		<cfset XmlAppend(xmlCollection[1].XmlChildren[i], xmlbiglist[i]) />
	</cfloop>

	<cfset count = XmlSearch(myxmldoc, 'count(*/record)')>
	<cfset addNewRecord.record.XmlText = count&"-" />
	<cfset XmlAppend(xmlCollection[1], addNewRecord) />

	

<cfelseif (#param4# eq "p") OR (#param4# eq "e") >



	<cfset myxmldoc= XmlParse("http://www.whitman.edu/penrose/new/files/#param1#.xml")>

	<cfset xmlbiglist = XmlSearch(myxmldoc, '/collection/record/')>  

	<cfset myxmlColl = XmlParse("http://www.whitman.edu/penrose/new/files/start.xml")>
	<cfset xmlCollection = XmlSearch(myxmlColl, 'collection')>

	<cfset ArrayDeleteAt(xmlCollection[1].XmlChildren, 1)>
	
	<cfset listStart = #param5#>
	<cfset countItr = 0>
	<cfset addItr = 1>
       <cfset numItemsItr = 0>

	<!--- if entire list counter is less than length of entire list and match count is less than difference between start and stop parameters.  --->
	<cfloop condition = "countItr LESS THAN #ArrayLen(xmlbiglist)#">

		<!---   assign children of current index in total list to arrElements.  --->		
		<cfset arrElements = #xmlbiglist[countItr + 1].XmlChildren#>
			

		<cfif addItr LESS THAN OR EQUAL TO (#param3# - #param2#)>		

		<!---   if entire list counter is greater than start point (listStart)   --->
		<cfif countItr GREATER THAN OR EQUAL TO listStart>
			
			<!---   loop thru all child elements of this single record looking for title ---> 
			<cfloop from="1" to="#arrayLen(arrElements)#" index="i" >
				<cfif StructKeyExists(arrElements[i], "XmlAttributes")>
					<cfif StructKeyExists(arrElements[i]["XmlAttributes"], "tag")>
						<cfif #arrElements[i]["XmlAttributes"]["tag"]# eq "245">

							<!---   build string of entire title from tags a, b, and c   --->
							<cfset title_author = "">
							<cfloop from="1" to="#arrayLen(arrElements[i].XmlChildren)#" index="k">
								<cfset title_author = title_author & #arrElements[i].XmlChildren[k].XmlText#>
							</cfloop>
							
							<!--- regular expression to see if title has electronic resource in it.   --->
							<cfset isElectronic = REMatchNoCase("\[electronic resource\]", #title_author#)>
						
							<cfif !ArrayIsEmpty(isElectronic) AND #param4# eq "e" AND #isElectronic[1]# eq "[electronic resource]">
									<cfset addNewRecord.record.XmlText = ToString(countItr + 1)&"-" />
									<cfset XmlAppend(xmlCollection[1], addNewRecord) />
									<cfset XmlAppend(xmlCollection[1].XmlChildren[addItr], xmlbiglist[countItr + 1]) />
									<cfset addItr = addItr + 1>
								
							<cfelseif ArrayIsEmpty(isElectronic) AND #param4# eq "p">
									<cfset addNewRecord.record.XmlText = ToString(countItr + 1)&"-" />
									<cfset XmlAppend(xmlCollection[1], addNewRecord) />
									<cfset XmlAppend(xmlCollection[1].XmlChildren[addItr], xmlbiglist[countItr + 1]) />
									<cfset addItr = addItr + 1>
							</cfif>
						</cfif>
					</cfif>
				</cfif>
			</cfloop>
		</cfif>
		</cfif>

		<cfloop from="1" to="#arrayLen(arrElements)#" index="e" >

		<cfif StructKeyExists(arrElements[e], "XmlAttributes")>
			<cfif StructKeyExists(arrElements[e]["XmlAttributes"], "tag")>
				<cfif #arrElements[e]["XmlAttributes"]["tag"]# eq "245">

					<cfset title_author = "">
					<cfloop from="1" to="#arrayLen(arrElements[e].XmlChildren)#" index="k">
						<cfset title_author = title_author & #arrElements[e].XmlChildren[k].XmlText#>
					</cfloop>
						
					<cfset isElectronic = REMatch("\[electronic resource\]", #title_author#)>
						
					<cfif !ArrayIsEmpty(isElectronic) AND #param4# eq "e" AND #isElectronic[1]# eq "[electronic resource]">
						<cfset numItemsItr = numItemsItr + 1>
		
					<cfelseif ArrayIsEmpty(isElectronic) AND #param4# eq "p">	
						<cfset numItemsItr = numItemsItr + 1>
					</cfif>

				</cfif>
			</cfif>
		</cfif>
		</cfloop>

		<cfset countItr = countItr + 1>
	</cfloop>
	
	<cfset addNewRecord.record.XmlText = ToString(numItemsItr)&"-" />
	<cfset XmlAppend(xmlCollection[1], addNewRecord) />
 
</cfif>


<cfoutput>#xmlCollection[1]#</cfoutput>


<cffunction
	name="XmlAppend"
	access="public"
	returntype="any"
	output="false"
	hint="Copies the children of one node to the node of another document.">
 
	<!--- Define arguments. --->
	<cfargument
		name="NodeA"
		type="any"
		required="true"
		hint="The node whose children will be added to."
		/>
 
	<cfargument
		name="NodeB"
		type="any"
		required="true"
		hint="The node whose children will be copied to another document."
		/>
 
 
	<!--- Set up local scope. --->
	<cfset var LOCAL = StructNew() />
 
	<!---
		Get the child nodes of the originating XML node.
		This will return both tag nodes and text nodes.
		We only want the tag nodes.
	--->
	<cfset LOCAL.ChildNodes = ARGUMENTS.NodeB.GetChildNodes() />
 
 
	<!--- Loop over child nodes. --->
	<cfloop
		index="LOCAL.ChildIndex"
		from="1"
		to="#LOCAL.ChildNodes.GetLength()#"
		step="1">
 
 
		<!---
			Get a short hand to the current node. Remember
			that the child nodes NodeList starts with
			index zero. Therefore, we must subtract one
			from out child node index.
		--->
		<cfset LOCAL.ChildNode = LOCAL.ChildNodes.Item(
			JavaCast(
				"int",
				(LOCAL.ChildIndex - 1)
				)
			) />
 
		<!---
			Import this noded into the target XML doc. If we
			do not do this first, then COldFusion will throw
			an error about us using nodes that are owned by
			another document. Importing will return a reference
			to the newly created xml node. The TRUE argument
			defines this import as DEEP copy.
		--->
		<cfset LOCAL.ChildNode = ARGUMENTS.NodeA.GetOwnerDocument().ImportNode(
			LOCAL.ChildNode,
			JavaCast( "boolean", true )
			) />
 
		<!---
			Append the imported xml node to the child nodes
			of the target node.
		--->
		<cfset ARGUMENTS.NodeA.AppendChild(
				LOCAL.ChildNode
			) />
 
	</cfloop>
 
 
	<!--- Return the target node. --->
	<cfreturn ARGUMENTS.NodeA />
</cffunction>











