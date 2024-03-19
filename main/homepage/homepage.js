// loadpics()
function loadpics (pics, count)
{
   let row1 = document.getElementById(pics);
   let row2 = document.getElementById(pics+"names");
   for (var i=0;i<count;i++)
   {   
      let td1 = document.createElement("td");
      let img = document.createElement("img");
      img.src = "../pics/" + pics + "/pic" + i + ".jpeg";
      td1.appendChild (img);
      row1.appendChild(td1);
      
      let td2= document.createElement("td");
      td2.innerHTML = "<p class='preg'>pic" + i + "</p>";
      row2.appendChild(td2);
   }   
}

// loadfolders()
function loadfolders (dirname, count)
{
   collection = ["Books", "Kids", "Spirituality", "Health", "Manifestation",
             "Travel", "Hobbies", "Personality Development"];

   var n = collection.length;
   var k = 5;

   let div = document.getElementById("mycollection");
   for (var i=0; i< n; )
   {   
      let table = document.createElement("table");
      let tr1 = document.createElement("tr");
      let tr2 = document.createElement("tr");
      for (var j=0; j<k && i<n; j++, i++)
      {   
         let td1= document.createElement("td");
         let alink = document.createElement("a");
         alink.href = "../pics/" + dirname + "/" +collection[i];
         alink.innerHTML = "<img class='imgsmall' src='../pics/folder.jpeg'>";
         td1.appendChild(alink);
         tr1.appendChild(td1);

         let td2= document.createElement("td");
         td2.innerHTML = "<p>" + collection[i] + "</p>";
         tr2.appendChild(td2);
      }
      table.appendChild (tr1);
      table.appendChild (tr2);
      div.appendChild(table);
   }   
}

// updateProfile()
function updateProfile()
{
   window.open('../createProfile/createProfile.html', '_blank');
}

// loadConnections()
function loadConnections ()
{
   newconnection = {
             "Gabriel Huxley":["Celeste Solace", "Cadence Ellis", "Maeve McKenna"],
             "Jonah Ledger":["Juniper Gonzales", "Grace Finnegan"],
             "Lincoln Jenkins":["Lyra Stoll", "Bellamy Alaia"],
             "Eli Beckett":["Orion Ford", "Celeste Hayes"],
             "Oscar Stoll":["Violet Bardot", "Aisling Huxley"],
             "Emmett Madison":["Indigo Finnegan", "Indiana Jones"],
             "Ilya Langley":["Heath Ledger", "Mahatma Gandhi"],
             "Rhett Hope":["Subash Chandra Bose", "Shah Rukh Khan"],
             "Cassius Cromwell":["Big Boss"],
             "Isaac Thatcher":["Steve Jobs"], };

   let div = document.getElementById("acqconnections");

   for (let key in newconnection)
   {
      for (var i=0; i< newconnection[key].length; i++)
      {
         let h6 = document.createElement("h6");
         h6.innerHTML = '<b style="color:#850000">' + key + '</b>  recently connected with  <b style="color:#92156d">' + newconnection[key][i] + '</b>';
         div.appendChild(h6);
      }
   }
}

// buttonActivate()
function buttonActivate(button)
{
   td = document.getElementById (button.id+'div');
   console.log(button.className)
   if (button.className != "inactivebutton")
   {
      button.className = "inactivebutton"; // Deactivate
      button.active = false;
      for (var child of td.children)
      {
         child.style.color= "#ccc";
         child.disabled = true;
      }
   }
   else
   {
      button.className = "updatebutton";
      button.active = true;
      for (var child of td.children)
      {
         child.style.color = "black";
         child.disabled = false;
      }
   }
}

// getElementName()
function getElementName (input, str1, str2)
{
   return (input.split(str1)[0] + str2);
}

// selectFocusUpdateTimespan()
function selectFocusUpdateTimespan (select)
{
   optionsplural = ["minutes", "hours", "days", "weeks", "months", "years"];
   optionssingular = ["minute", "hour", "day", "week", "month", "year"];
   options = optionsplural;
   input = document.getElementById(getElementName(select.id, "select", "input"));
   if (input.value == 1)
      options = optionssingular;
   select.innerHTML = "";
   for (var val of options)
   {
      opt = document.createElement ("option");
      opt.value = val;
      opt.innerHTML= val;
      select.appendChild(opt);
   }
}

// stripSpaces()
function stripSpaces(str)
{
   return (str.replace(/ /g,''));
}

// loadActiveListenersHelper()
function loadActiveListenersHelper (ele, dir, activelist, call=false)
{
   active = document.getElementById(ele);
   activenames = document.getElementById(ele + "names");
   activechat = document.getElementById(ele + "chat");
   if (call)
   {
      table = document.getElementById(ele + "table")
      activecall = document.createElement("tr");
      table.appendChild(activecall);
   }
   for (var i=0; i<activelist.length; i++)
   {
      let td1 = document.createElement ("td");
      let img = document.createElement("img");
      img.src = "../pics/" + dir +"/" + stripSpaces(activelist[i]) + ".jpeg";
      td1.appendChild (img);
      active.appendChild(td1);
      
      let td2= document.createElement("td");
      td2.innerHTML = "<p class='preg'>" + activelist[i] + "</p>";
      activenames.appendChild(td2);

      let td3= document.createElement("td");
      td3.innerHTML = "<p class='pregB'>Chat Now</p>";
      activechat.appendChild(td3);

      if (call)
      {
         let td4= document.createElement("td");
         td4.innerHTML = "<p class='pregB'>Call Now</p>";
         activecall.appendChild(td4);
      }
   }
}

// loadActiveListeners()
function loadActiveListeners(acq, others)
{
   acqactive = ["Robert Downey Jr", "Beyonce", "Brad Pitt", "Albert Einstein", "Abraham Lincoln",
            "Charles Darwin", "Joseph Stalin", "Charles Dickens", "Queen Elizabeth", "Thomas Jefferson" ];
   othersactive = ["Mithali Raj", "Barack Obama", "Michelle Obama", "Elvis Presley", "Mahatma Gandhi",
            "Kalpana Chawla", "Kiran Bedi", "Marie Curie", "Mary Kom", "Rosalind Franklin",
            "Rosa Parks", "The Rock"];

   loadActiveListenersHelper (acq, "AcqActive", acqactive, true);
   loadActiveListenersHelper (others,"OthersActive", othersactive);
}

// init()
function init(page)
{
   if (page == 'mypage')
   {
      loadpics ('mypics', 10);
      loadfolders ('mycollection',8);
   }
   else if (page == 'acqpage')
   {
      loadpics ('otherspics', 10);
      loadConnections ();
   }
   else if (page == "italknow")
   {
      loadActiveListeners("acqactive", "othersactive");
   }
   else if (page == "ilistennow")
   {
      loadActiveListeners("acqtalk", "otherstalk");
   }
   document.addEventListener('scroll', function(e)
   {
      h2s = document.getElementsByTagName("h2");
      for (let i=0; i<h2s.length ; i++)
      {
         if (h2s[i].className != "h2stayput")
            h2s[i].style.transform = `translateX(${window.scrollX}px)`;
      }
   });
}


