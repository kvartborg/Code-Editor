Session.set('tabs', []);

window.tab = {
  
  open: function(id, filename, mode, body) {
    var check = false,
        tabs = Session.get('tabs');

    for(var i = 0; i < tabs.length; i++){
      tabs[i].index = i+1;
      if(tabs[i]._id == id){
        // if tab exists
        tabs[i].current = 'current';
        check = true;

        editor.setOption('mode', tabs[i].mode);
        editor.doc.setValue(tabs[i].body);   
      } else {
        tabs[i].current = undefined;
      }
    }

    if(!check){
      editor.setOption('mode', mode);
      editor.doc.setValue(body);
      tabs.push({_id: id, index: (tabs.length+1), filename: filename, mode: mode, body: body, current: 'current', });
      Session.set('tabs', tabs);
    } else {
      Session.set('tabs', tabs);
    }

    //$('#editor textarea').focus();
  },

  switch: function(id){
    var tabs = Session.get('tabs'); 

    for(var i = 0; i < tabs.length; i++){
      if(tabs[i]._id == doc.current()._id){
        tabs[i].body = editor.getValue();
      }

      if(tabs[i]._id == id){
        var t = tabs[i];
      }
    }

    Session.set('tabs', tabs);

    if(t)
      doc.open(t._id, t.filename, t.mode, t.body);
  },

  close: function(id){
    var tabs = Session.get('tabs');
    
    for(var i = 0; i < tabs.length; i++){
      if(tabs[i]._id == id)
        tabs.splice(i, 1);
    }

    editor.doc.setValue('');

    Session.set('tabs', tabs);
    $('#topbar #'+id).remove();
    $('#sidebar li').removeClass('current');
  }

};

$(document).ready(function(){
  $('#tabs').css({ 'left': $('#sidebar').width() });
});

Template.topbar.helpers({
  tabs: function(){
    return Session.get('tabs');
  }
});

Template.topbar.events({
  'click .tab': function(event){
    tab.switch($(event.target).attr('id'));
  },

  'click .tab-close': function(event){
    tab.close($(event.target).attr('id'))
  }
});




