import { createClient } from '@supabase/supabase-js'

const supabaseUrl = "https://fabgbzoamyrykqdogvuk.supabase.co"
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZhYmdiem9hbXlyeWtxZG9ndnVrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTA0MjY4NDAsImV4cCI6MjAyNjAwMjg0MH0.I5yXUCbVLqHcbL6ld72c0vaux30NL99Vy8GsRoF7hmk"
export const supabase = createClient(supabaseUrl, supabaseKey)