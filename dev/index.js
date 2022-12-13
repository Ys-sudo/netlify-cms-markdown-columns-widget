import './bootstrap.js'
import CMS, { init } from 'netlify-cms'
import 'netlify-cms/dist/cms.css'
import './bulma.min.css'

const config = {
backend: {
 name: 'test-repo',
 login: false,
},
media_folder: 'assets',
collections: [{
 name: 'test',
 label: 'Test',
 files: [{
   file: 'test.yml',
   name: 'test',
   label: 'Test',
   fields: [
     {label: "Body", name: "body", widget: "markdown",editor_components:['image','code-block','columns-layout']},
   ],
 }],
}],
}

CMS.registerEditorComponent({
  // Internal id of the component
  id: "columns-layout",
  // Visible label
  label: "Columns",
  name: 'columns',
  // Fields the user need to fill out when adding an instance of the component
  fields: [
    {
      name: 'class',
      label: 'Class',
      widget: "select",
      options: ["is-1","is-2","is-3","is-4","is-5","is-6","is-7","is-8","is-9","is-10","is-12"],
      default: 'is-6'
    },
    {
      name: 'content',
      label: 'Content',
      widget: 'markdown',
      default:'Lorem Ipsum...'
    },
    {
      name: 'class2',
      label: 'Class2',
      widget: "select",
      options: ["is-1","is-2","is-3","is-4","is-5","is-6","is-7","is-8","is-9","is-10","is-12"],
      default: 'is-6'
    },
    {
      name: 'content2',
      label: 'Content2',
      widget: 'markdown',
      default:'Lorem Ipsum...'
    }
  ],
  // Regex pattern used to search for instances of this block in the markdown document.
  // Patterns are run in a multline environment (against the entire markdown document),
  // and so generally should make use of the multiline flag (`m`). If you need to capture
  // newlines in your capturing groups, you can either use something like
  // `([\S\s]*)`, or you can additionally enable the "dot all" flag (`s`),
  // which will cause `(.*)` to match newlines as well.
  //
  // Additionally, it's recommended that you use non-greedy capturing groups (e.g.
  // `(.*?)` vs `(.*)`), especially if matching against newline characters.
  pattern: /^<div class="columns">$\s(.*?)<\/div>\n\n/ms,
  // Given a RegExp Match object
  // (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/match#return_value),
  // return an object with one property for each field defined in `fields`.
  //
  // This is used to populate the custom widget in the markdown editor in the CMS.
  fromBlock: function(match) {
    return {
      class: match[1],
      content: match[2],
      class2: match[3],
      content2: match[4]
    };
  },
  // Given an object with one property for each field defined in `fields`,
  // return the string you wish to be inserted into your markdown.
  //
  // This is used to serialize the data from the custom widget to the
  // markdown document
  toBlock: function(data) {
    return `
<div class="columns">
<div class="column ${data.class}"><p>${data.content}</p></div>
<div class="column ${data.class2}"><p>${data.content2}</p></div>
</div>
`;
  },
  // Preview output for this component. Can either be a string or a React component
  // (component gives better render performance)
  toPreview: function(data) {
    return `
<div class="columns">
  <div class="${data.class}"><p>${data.content}</p></div>
  <div class="${data.class2}"><p>${data.content2}</p></div>
</div>
`;
  }
});


init({ config })
