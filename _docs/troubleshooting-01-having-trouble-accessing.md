---
title:  "Clear Browser's Cache"
permalink: /clear-cache/ 
date:   2019-08-23 15:00:00 +0800
categories: clear browser cache
---
If you are having trouble with Quire and logging out and back in doesn’t solve your problem, maybe you can try the following ways to troubleshoot. 

#### Clear browser cache on Google Chrome 

Right click on a blank space in the Quire workspace. Choose **Inspect**.

![right click Inspect]({{ site.url }}{{ site.baseurl }}/assets/images/clear-cache/chrome_inspect.png)


At the **Application** tab at the top bar, navigate to the **Cache** section at the sidebar. Under **Cache Storage**, right click on **sw-quire-cache-b1085**  and click **Delete**. 

![clear Google Chrome browser cache]({{ site.url }}{{ site.baseurl }}/assets/images/clear-cache/chrome_clear_cache.png)

Lastly, hit <kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>R</kbd> (or <kbd>⌘</kbd> + <kbd>Shift</kbd> + <kbd>R</kbd> for Mac) to refresh your Quire page.


#### Clear browser cache on Safari 
Click **Develop** at the top menu bar and click **Empty Caches**.

![clear Safari browser cache]({{ site.url }}{{ site.baseurl }}/assets/images/clear-cache/safari_clear_cache.png)


#### Unregister Your Service Worker on Google Chrome

Go to this URL: `chrome://serviceworker-internals/`

![service worker URL]({{ site.url }}{{ site.baseurl }}/assets/images/clear-cache/serviceworker_url.png)


Click on the **Unregister** button of all the Service Workers from there.

![service worker URL]({{ site.url }}{{ site.baseurl }}/assets/images/clear-cache/unregister_serviceworker.png)


Lastly, hit <kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>R</kbd> (or <kbd>⌘</kbd> + <kbd>Shift</kbd> + <kbd>R</kbd> for Mac) to refresh your Quire page.

