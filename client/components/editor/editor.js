$(document).ready(function(){

  window.editor = CodeMirror($('#editor')[0], {
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
      },
      "Cmd-N": function (instance) {
        if($('#sidebar').hasClass('hidden')) sidebar.hide();
        $('#add-file').trigger('click');
        return false;
      },
      "Cmd-1": function(){
        $('.tab-1').trigger('click');
         return false;
      },
      "Cmd-2": function(){
        $('.tab-2').trigger('click');
         return false;
      },
      "Cmd-3": function(){
        $('.tab-3').trigger('click');
         return false;
      },
      "Cmd-4": function(){
        $('.tab-4').trigger('click');
         return false;
      },
      "Cmd-5": function(){
        $('.tab-5').trigger('click');
         return false;
      },
      "Cmd-6": function(){
        $('.tab-6').trigger('click');
         return false;
      },
      "Cmd-7": function(){
        $('.tab-7').trigger('click');
         return false;
      },
      "Cmd-8": function(){
        $('.tab-8').trigger('click');
         return false;
      },
      "Cmd-9": function(){
        $('.tab-9').trigger('click');
         return false;
      },
      "Cmd-B": function(){
        sidebar.hide();
        return false;
      },
    }
  });

  $('#editor').css({ 'left' : $('#sidebar').width() });
});
