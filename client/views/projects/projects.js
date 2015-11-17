window.project = {

  current: function(){
    try {
      return JSON.parse(localStorage.project);
    } catch(err){
      return localStorage.project;
    }
  },

  clear: function(){
    localStorage.clear();
    Session.set('project', undefined);
    $('#files').html('');
  },

  set: function(_id){
    if(!_id){
      return;
    }

    projects.find({ _id: _id }).forEach(function(obj){
      Session.set('project', obj);
      localStorage.project = JSON.stringify(Session.get('project'));
      $('#files').html(obj.structure);
      $('#projects').remove();
    });
  },

  delete: function(_id){
    projects.remove({ _id: _id });
  },

};

Template.projects.helpers({
  current: function(){
    return !Session.get('project');
  }
});

Template.projects.events({
  'keyup input': function(event){
    if(event.keyCode == 13){
      var _id = projects.insert({ 'name': event.target.value });
      project.set(_id);
    }
  }
});

// if a project is set
$(document).ready(function(){
  if(project.current()){
    Session.set('project', project.current());
    project.set(project.current()._id);
  }
});
