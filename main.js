/*
  Here is a guide for the steps you could take:
*/

// 1. First select and store the elements you'll be working with


// 2. Create your `onSubmit` event for getting the user's search term


// 3. Create your `fetch` request that is called after a submission


// 4. Create a way to append the fetch results to your page


// 5. Create a way to listen for a click that will play the song in the audio play


fetch('https://api.soundcloud.com/tracks?client_id=8538a1744a7fdaa59981232897501e04')

//&qbandname for each url
.then(
  function(response) {
    if (response.status !== 200) {
      console.log('Looks like there was a problem. Status Code: ' + response.status);
      return;
    }
    response.json().then(function(data) {

      let title = data[0].title;
      let band = data[0].user.username;
      let searchBar = document.getElementById('searchBar');
      // console.log(band);
      function search() {

        SC.initialize({
          client_id: '8538a1744a7fdaa59981232897501e04'
        });

        SC.get('/tracks', {
          q: 'buskers', license: 'cc-by-sa'
        }).then(function(tracks) {
          console.log(tracks);
        });

        // fetch('https://api.soundcloud.com/tracks?client_id=8538a1744a7fdaa59981232897501e04')
        // for (i = 0; i < data.title; i++) {
        //   //make the input value equal the pulled api data
        //   searchBar.value = title;
        //   title = searchBar.value;
        //   console.log(title);


      }//search function closing bracket

      let markup = `
          <div>
            <ul>
              <li>${data[0].title}</li>
              <!-- make search function above output value onto list below -->
              <li>searchBar.value</li>

            </ul>
          </div>
      `
      document.body.innerHTML += markup;

    }
    )
  }
)
