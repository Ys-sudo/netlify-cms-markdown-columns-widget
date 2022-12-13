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
  id: "columns-layout",
  label: "2 Columns",
  name: 'columns-2',
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
  pattern:  /^<columns>$\s*?<div>(.*?)<\/div>\n\n(.*?)\n^<\/columns>$/ms,
  fromBlock: function(match) {
    return {
      class: match[1],
      content: match[2],
      class2: match[3],
      content2: match[4]
    };
  },
  toBlock: function(data) {
    return `
<columns>
<div class="columns c2">
<div class="column ${data.class}">${data.content}</div>
<div class="column ${data.class2}">${data.content2}</div>
</div>
</columns>
`;
  },
  toPreview: function(data) {
    return `
<columns>
<div class="columns c2">
  <div class="${data.class}">${data.content}</div>
  <div class="${data.class2}">${data.content2}</div>
</div>
</columns>
`;
  }
});



CMS.registerEditorComponent({
  // Internal id of the component
  id: "columns-layout-3",
  // Visible label
  label: "3 Columns",
  name: 'columns-3',
  // Fields the user need to fill out when adding an instance of the component
  fields: [
    {
      name: 'classc3',
      label: 'Class',
      widget: "select",
      options: ["is-1","is-2","is-3","is-4","is-5","is-6","is-7","is-8","is-9","is-10","is-12"],
      default: 'is-4'
    },
    {
      name: 'contentc3',
      label: 'Content',
      widget: 'markdown',
      default:'Lorem Ipsum...'
    },
    {
      name: 'class2c3',
      label: 'Class2',
      widget: "select",
      options: ["is-1","is-2","is-3","is-4","is-5","is-6","is-7","is-8","is-9","is-10","is-12"],
      default: 'is-4'
    },
    {
      name: 'content2c3',
      label: 'Content2',
      widget: 'markdown',
      default:'Lorem Ipsum...'
    },
    {
      name: 'class3c3',
      label: 'Class3',
      widget: "select",
      options: ["is-1","is-2","is-3","is-4","is-5","is-6","is-7","is-8","is-9","is-10","is-12"],
      default: 'is-4'
    },
    {
      name: 'content3c3',
      label: 'Content3',
      widget: 'markdown',
      default:'Lorem Ipsum...'
    }
  ],
  pattern:  /^<columns3>$\s*?<div>(.*?)<\/div>\n\n(.*?)\n^<\/columns3>$/ms,
  fromBlock: function(match) {
    return {
      classc3: match[1],
      contentc3: match[2],
      class2c3: match[3],
      content2c3: match[4],
      class3c3: match[5],
      content3c3: match[6]
    };
  },
  toBlock: function(data) {
    return `
<columns3>
<div class="columns c3">
<div class="column ${data.classc3}">${data.contentc3}</div>
<div class="column ${data.class2c3}">${data.content2c3}</div>
<div class="column ${data.class3c3}">${data.content3c3}</div>
</div>
</columns3>
`;
  },
  toPreview: function(data) {
    return `
<columns3>
<div class="columns c3">
<div class="column ${data.classc3}">${data.contentc3}</div>
<div class="column ${data.class2c3}">${data.content2c3}</div>
<div class="column ${data.class3c3}">${data.content3c3}</div>
</div>
</columns3>
`;
  }
});


CMS.registerEditorComponent({
  // Internal id of the component
  id: "columns-layout-4",
  // Visible label
  label: "4 Columns",
  name: 'columns-4',
  // Fields the user need to fill out when adding an instance of the component
  fields: [
    {
      name: 'classc4',
      label: 'Class',
      widget: "select",
      options: ["is-1","is-2","is-3","is-4","is-5","is-6","is-7","is-8","is-9","is-10","is-12"],
      default: 'is-3'
    },
    {
      name: 'contentc4',
      label: 'Content',
      widget: 'markdown',
      default:'Lorem Ipsum...'
    },
    {
      name: 'class2c4',
      label: 'Class2',
      widget: "select",
      options: ["is-1","is-2","is-3","is-4","is-5","is-6","is-7","is-8","is-9","is-10","is-12"],
      default: 'is-3'
    },
    {
      name: 'content2c4',
      label: 'Content2',
      widget: 'markdown',
      default:'Lorem Ipsum...'
    },
    {
      name: 'class3c4',
      label: 'Class3',
      widget: "select",
      options: ["is-1","is-2","is-3","is-4","is-5","is-6","is-7","is-8","is-9","is-10","is-12"],
      default: 'is-3'
    },
    {
      name: 'content3c4',
      label: 'Content3',
      widget: 'markdown',
      default:'Lorem Ipsum...'
    },
    {
      name: 'class4c4',
      label: 'Class4',
      widget: "select",
      options: ["is-1","is-2","is-3","is-4","is-5","is-6","is-7","is-8","is-9","is-10","is-12"],
      default: 'is-3'
    },
    {
      name: 'content4c4',
      label: 'Content4',
      widget: 'markdown',
      default:'Lorem Ipsum...'
    }
  ],
  pattern: /^<columns4>$\s*?<div>(.*?)<\/div>\n\n(.*?)\n^<\/columns4>$/ms,
  fromBlock: function(match) {
    return {
      classc4: match[1],
      contentc4: match[2],
      class2c4: match[3],
      content2c4: match[4],
      class3c4: match[5],
      content3c4: match[6],
      class4c4: match[7],
      content4c4: match[8]
    };
  },
  toBlock: function(data) {
    return `
<columns4>
<div class="columns c4">
<div class="column ${data.classc4}">${data.contentc4}</div>
<div class="column ${data.class2c4}">${data.content2c4}</div>
<div class="column ${data.class3c4}">${data.content3c4}</div>
<div class="column ${data.class4c4}">${data.content4c4}</div>
</div>
</columns4>
`;
  },
  toPreview: function(data) {
    return `
<columns4>
<div class="columns c4">
<div class="column ${data.classc4}">${data.contentc4}</div>
<div class="column ${data.class2c4}">${data.content2c4}</div>
<div class="column ${data.class3c4}">${data.content3c4}</div>
<div class="column ${data.class4c4}">${data.content4c4}</div>
</div>
</columns4>
`;
  }
});


init({ config })
