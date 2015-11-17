window.doc = {

  current: function(){
    return JSON.parse(localStorage.doc);
  },


  modes: {
    'js'  : 'javascript',
    'html': 'text/html',
    'php' : 'php',
    'txt' : 'text/plain',
    'css' : 'text/css',
  },


  open: function(target){
    $('.CodeMirror').remove();
    $('#sidebar li').removeClass('current');
    var file = files.findOne({ '_id': target, project_id: project.current()._id });
    editorOptions.mode = file.mode;
    var editor = CodeMirror.fromTextArea($('textarea#editor')[0], editorOptions);
    editor.doc.setValue(file.body);
    localStorage.doc = JSON.stringify(file);
    $('#'+target).addClass('current');
  },


  create: function(target){
    var filename = $('li.new span').text().replace(/\r?\n|\r/g, '');
    if(filename.split('.').length > 1)
      var ext = filename.split('.')[(filename.split('.').length - 1)];
    else
      var ext = 'txt';

    var id = files.insert({ project_id: project.current()._id, name: filename, mode: this.modes[ext], body: ''});
    $('li.new').removeClass('new').html('<i class="fa fa-file-o"></i>'+filename).attr('id', id);
    
    var structure = $('#files').html();
    $('#files').html('');

    projects.update(
      { _id: project.current()._id }, 
      { $set: {
        structure: structure,
      }
    });

    this.open(id);
  },

  save: function(){
    var editor = CodeMirror.fromTextArea($('textarea#editor')[0], editorOptions);
    files.update({ _id: doc.current()._id }, {
      $set: {
        body: editor.getValue(),
      }
    });
  },


  delete: function(){
    var id = $('#sidebar .current').attr('id');
    $('#'+id).remove();
    var structure = $('#files').html();
    $('#files').html('');
    files.remove(id);
    projects.update(
      { _id: project.current()._id }, 
      { $set: {
        structure: structure,
      }
    });
  }

};


window.folder = {

  open: function(target){

  },

};


Template.sidebar.helpers({
  structure: function(){
    Session.set('structure', projects.findOne({ '_id': project.current()._id }).structure);
    return Session.get('structure');
  }
});


Template.sidebar.events({
  
  'click #add-file': function(event){
    $('#files').append('<li class="file new"><i class="fa fa-file-o"></i><span contentEditable="true"></span></li>');
    $('li.new span').focus();
  },

  'keypress #sidebar .new': function(event){ if(event.keyCode != 13){ return true; } else { return false; } },

  'keyup #sidebar .new': function(event){
    var str = $('li.new span').text();
    if(event.keyCode == 13 && str.length > 0){
      doc.create(event.target);
    } else if(event.keyCode == 27){
      $(event.target).blur();
    }
  },

  'blur #sidebar .new': function(event) {
    if($('li.new').length == 0){
      return;
    }

    var str = $('li.new span').text();
    if(str.length < 1){
      $('li.new').remove();
    } else {
      doc.create(event.target);
    }
  },

  'click #sidebar li.file': function(event){
    $('#sidebar .file').removeClass('current');
    $(event.target).addClass('current');
    doc.open($(event.target).attr('id'));
  }
});









