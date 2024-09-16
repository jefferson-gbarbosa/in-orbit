interface CreateGoalRequest {
    title: string
    desiredWeeklyFrequency: number
  }
  
  export async function createGoal({
    title,
    desiredWeeklyFrequency,
  }: CreateGoalRequest) {
    await fetch('https://api-in-orbit.onrender.com/goals', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        title,
        desiredWeeklyFrequency,
      }),
    })
  }