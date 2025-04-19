import { createClient } from '@supabase/supabase-js'

const supabaseUrl = "https://qdziceidkbnizkesgobr.supabase.co"
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFkemljZWlka2JuaXprZXNnb2JyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDQ4Njc0NTUsImV4cCI6MjA2MDQ0MzQ1NX0.RD58crw9HpKlIXgf9IOkXk5DoUXrz6t4393SFbKWlzA"
export const supabase = createClient(supabaseUrl, supabaseKey)