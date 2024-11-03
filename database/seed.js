import { fakerEN_US as faker } from '@faker-js/faker'
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.VITE_SUPABASE_URL
const serviceRoleKey = process.env.SERVICE_ROLE_KEY
const supabase = createClient(supabaseUrl, serviceRoleKey)

const seedProjects = async (numEntries = 1) => {
  const projects = []
  for (let i = 0; i < numEntries; i++) {
    const name = faker.lorem.words(3)
    const project = {
      name,
      slug: name.toLowerCase().replaceAll(' ', '-'),
      status: faker.helpers.arrayElement(['in-progress', 'completed']),
      collaborators: faker.helpers.arrayElements([1, 2, 3]),
    }
    projects.push(project)
  }

  await supabase.from('projects').insert(projects)
}

seedProjects(10)
