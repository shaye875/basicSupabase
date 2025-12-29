import 'dotenv/config'
import { createClient } from '@supabase/supabase-js'

export const supabase = createClient(
    process.env.URL,
    process.env.Key
)

export async function getAllProducts() {
    const { data, error } = await supabase
        .from('products')
        .select()
    return data
}

export async function getAllUsers() {
    const { data } = await supabase
        .from("users")
        .select()
    return data
}

