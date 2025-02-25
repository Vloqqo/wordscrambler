import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm';

const supabaseUrl = 'https://rcwwcczuieeqsqavydzo.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJjd3djY3p1aWVlcXNxYXZ5ZHpvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzkzOTg3MTcsImV4cCI6MjA1NDk3NDcxN30.4RmiDtCajBUASsfAo2XnD0tQxMyTfK0QW_JpV10rqCg'
const supabase = createClient(supabaseUrl, supabaseKey)

const { data, error } = await supabase
  .from('NewLeaderBoard')
  .select()

console.log([ data, error])

function insertRow() {
    
}