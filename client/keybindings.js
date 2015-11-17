
Mousetrap.bind('command+s', function() { doc.save(doc.current()._id); });

Mousetrap.bind('command+n', function() { $('#add-file').trigger('click'); });

Mousetrap.bind('command+backspace', function() { doc.delete(); });

Mousetrap.bind('ctrl+command+p', function() { console.log('switch project!'); });