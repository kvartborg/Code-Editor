
Mousetrap.bind('command+s', function() { doc.save(doc.current()._id); });
Mousetrap.bind('command+n', function() { $('#add-file').trigger('click'); });
Mousetrap.bind('command+backspace', function() { doc.delete(); });
Mousetrap.bind('ctrl+command+p', function() { console.log('switch project!'); });
Mousetrap.bind('command+b', function() { sidebar.hide(); });
//Mousetrap.bind('command+', function() { tap.close(doc.current()._id); });

Mousetrap.bind('command+1', function(){ tab.switch($('#topbar .tab-1').attr('id')); });
Mousetrap.bind('command+2', function(){ tab.switch($('#topbar .tab-2').attr('id')); }); 
Mousetrap.bind('command+3', function(){ tab.switch($('#topbar .tab-3').attr('id')); }); 
Mousetrap.bind('command+4', function(){ tab.switch($('#topbar .tab-4').attr('id')); }); 
Mousetrap.bind('command+5', function(){ tab.switch($('#topbar .tab-5').attr('id')); }); 
Mousetrap.bind('command+6', function(){ tab.switch($('#topbar .tab-6').attr('id')); }); 
Mousetrap.bind('command+7', function(){ tab.switch($('#topbar .tab-7').attr('id')); }); 
Mousetrap.bind('command+8', function(){ tab.switch($('#topbar .tab-8').attr('id')); }); 
Mousetrap.bind('command+9', function(){ tab.switch($('#topbar .tab-9').attr('id')); });
