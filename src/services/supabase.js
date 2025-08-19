import { createClient } from '@supabase/supabase-js'
const supabaseUrl = 'https://lzaamjkxdogmjruconbl.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imx6YWFtamt4ZG9nbWpydWNvbmJsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTU1MzY0NDcsImV4cCI6MjA3MTExMjQ0N30.JfAMCDg5i6Bzk3Vvxa8HyJj2kkcKkdH9tvLVqZKRsg0'

export const supabase = createClient(supabaseUrl, supabaseKey);