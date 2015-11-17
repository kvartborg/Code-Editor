Template.editor.helpers({

    "editorOptions": function() {
      return editorOptions;
    },

    "editorCode": function() {
      return "";
    }

});


$(document).ready(function(){
  $('#editor').css({ 'left' : $('#sidebar').width() });
});


var editorOptions = {
  lineNumbers: true,
  mode: "php",
  theme: "monokai",
  keyMap: 'sublime',
  indentUnit: 2,
  tabSize: 2,
  extraKeys: {
    "Cmd-S": function (instance) {
       doc.save()
       return false;
    }
  }
}

window.editorOptions = editorOptions;