# netlify-cms-markdown-columns-widget

![alt text](https://github.com/Ys-sudo/netlify-cms-markdown-columns-widget/blob/main/md-cols.jpg)

## Extends the netlify-cms-widget-markdown with 3 additional columns modules: 2 columns, 3 columns and 4 columns layouts.
### The columns width can be modified by selecting the according classes from the netlify UI. 
#### The classes are based on the [bulma 12 columns system](https://bulma.io/documentation/columns/sizes/#12-columns-system).
##### To see the results as colums **You need to either import bulma globally to both the backend and frontend of your site**, or write the **columns** class and the according **is-1, is-2,...,is-12** classes yourself

##### How to implement?

To register the widget, add the ```editor_components:['image','code-block','columns-layout','columns-layout-3','columns-layout-4']```, to every markdown widget in your ```config.yaml``` file. Then add the ```CMS.registerEditorComponent({...})``` modules to your ```cms.js``` file. If you have bulma imported or custom classes made for the columns then you are all set and done!

