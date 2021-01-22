var names = [
    'first item',
    'second item is longer than the third one',
    'third longish item'
  ];
  
  function megaFriend(names)
  {
    var lgth = 0;
  var longest;
  
  for (var i = 0; i < names.length; i++) {
    if (names[i].length > lgth) {
      var lgth = names[i].length;
      longest = names[i];
    }
    
  }
  return longest;
}
  
 
  var t= megaFriend(names);
  console.log(t);