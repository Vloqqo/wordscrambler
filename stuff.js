import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm';

const supabaseUrl = 'https://rcwwcczuieeqsqavydzo.supabase.co'
const supabaseKey = ''
const supabase = createClient(supabaseUrl, supabaseKey)

const { data, error } = await supabase
  .from('NewLeaderBoard')
  .select()

console.log([ data, error])

const enterKey = document.getElementById('name');
enterKey.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
        alert("Posted Score to Leaderboard");
        let name1 = document.getElementById('name').value;
        localStorage.setItem('Name', name1);
        localStorage.setItem('points', score);
        insertRow()
    }

})

function insertRow() {
    let points = localStorage.getItem('points')
}
