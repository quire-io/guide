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


At the **Application** tab at the top bar, navigate to the **Cache** section at the sidebar. Under **Cache Storage**, right click on **sw-quire-cache-bxxxx** (the number after b stands for the version number, it will change over time) and click **Delete**. 

![clear Google Chrome browser cache]({{ site.url }}{{ site.baseurl }}/assets/images/clear-cache/chrome_clear_cache.png)


#### Clear browser cache on Safari 
Click **Develop** at the top menu bar and click **Empty Caches**.

![clear Safari browser cache]({{ site.url }}{{ site.baseurl }}/assets/images/clear-cache/safari_clear_cache.png)


#### Clear browser cache on Firefox  

Click on the menu button at the upper right corner of Firefox and select **Preferences**.  Then go to the **Privacy & Security** tab at the right hand side. 

In the **Cookies and Site Data** section, click **Clear Data**. 

Lastly, click on the **Clear** button to clear cache. 


#### Clear browser cache on Microsoft Edge 

Click on the More Options button at the upper right corner of the Edge browser and select **Settings**. Then go to the **Privacy and services** tab at the right hand side. 


In the **Clear browsing data** section, click **Choose what to clear**. 

Lastly, click on the **Clear Now** button to clear cache. 



#### Unregister Your Service Worker on Google Chrome

Go to this URL: `chrome://serviceworker-internals/`

![service worker URL]({{ site.url }}{{ site.baseurl }}/assets/images/clear-cache/serviceworker_url.png)


Click on the **Unregister** button of all the Service Workers from there.

![service worker URL]({{ site.url }}{{ site.baseurl }}/assets/images/clear-cache/unregister_serviceworker.png)


Lastly, hit <kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>R</kbd> (or <kbd>⌘</kbd> + <kbd>Shift</kbd> + <kbd>R</kbd> for Mac) to refresh your Quire page.

