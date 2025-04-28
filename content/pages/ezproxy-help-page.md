---
title: EZProxy Help page
url: /ezphelp
date: 2025-04-28T21:22:34.459Z
---
We recently changed the way we link to materials to ensure access when users are not on Whitman Secure for their internet connection. There are still some lingering issues and you may see 404 errors that say you are not able to connect to ezproxy.whitman.edu. Below are instructions for the main issue. Please don't hesitate to contact us at library@whitman.edu for further support. 

Zotero settings still holding the old proxy:

* Right click on the browser extension (not the Zotero desktop app) and select preferences \[firefox] or options \[chrome] > proxies
* Look for something like "ezproxy.whitman.edu" and select it and click the - button to remove it. 
* Then you can add the new proxy if it's not already there by selecting the + button and adding the following: Login URL Scheme: https://whitman.idm.oclc.org/login?qurl=%u
  Proxied URL Scheme: %h.whitman.idm.oclc.org/%p
