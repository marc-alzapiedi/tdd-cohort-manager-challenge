| Objects       | Properties                                                                                                          | Messages                                                               | Notes                                                                                                                      | Scenario                                                                                  | Output             | Example                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
|---------------|---------------------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------|--------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| cohortManager | cohort name,  student: studentID,          first Name,          last Name,          github username,          email | cohortManager.create(@string)                                          | The string will be the cohort name, and when pass the method will create the object in the array with two  key value pairs | the array starts off blank and the  function is called                                    | cohortData @array  | cohortManager.create('Cohort 10') =>[{       cohort: Cohort 10       students: [                 ] }]                                                                                                                                                                                                                                                                                                                                                                              |
|               |                                                                                                                     | cohortManager.searchCohort(@string)                                    | The string will be the cohort name and will return the cohort object,  if it exists.                                       | The cohort exists                                                                         | cohortData @object | cohortManager.searchCohort('Cohort 8) =>{       cohort: Cohort 8       students: [       {          firstName: 'Bill',          lastName: 'Sanders',          githubUsername: 'billysanders101,          email: billysanders101@gmail.com,          studentId: @number       },       {          firstName: 'Kyle',          lastName: 'Bridgewater',          githubUsername: 'kyleUnderwater',          email: kylebridge@yahoo.com,          studentId: @number       }     ] } |
|               |                                                                                                                     |                                                                        |                                                                                                                            | the cohort doesn't exist                                                                  | @string            | The cohort doesn't exist                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
|               |                                                                                                                     | cohortManager.addStudent(@string,  @string, @string, @string, @string) | The strings include the firstname, lastname, github username,  userEmail, and cohort to be added.                          | The students array  starts off blank and it  gets filled with objects containing the data | cohortData @array  | cohortManager.addStudent('Kyle', 'Bridgewater',  'kyleUnderwater', 'kylebridge@yahoo.com',  'Cohort 10') => [    {      cohortName: Cohort 10,      students: [        {          firstName: 'Kyle',          lastName: 'Bridgewater,          githubUsername: 'kyleUnderwater',          email: kylebridge@yahoo.com,          studentId: @number        }    ]    } ]                                                                                                            |
|               |                                                                                                                     | cohortManager.removeCohort(@string)                                    | The string is the cohort name, and will remove the cohort from the array.                                                  | The cohort exists                                                                         | cohortData @array  | cohortManager.removeCohort('Cohort 9') =>         [           {             cohortName: 'Cohort 10',             students: []           }         ]                                                                                                                                                                                                                                                                                                                                |
|               |                                                                                                                     |                                                                        |                                                                                                                            | The cohort doesn't exist                                                                  | @string            | The cohort doesn't exist                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
|               |                                                                                                                     | cohortManager.removeStudent(@string, @string)                          | The strings are the first and last names of the student to be removed from the cohort                                      | The student exists and belongs to a cohort                                                | cohortData @array  | cohortManager.removeStudent('Kyle', 'Bridgewater')  => [    {      cohortName: Cohort 10,      students: []    } ]                                                                                                                                                                                                                                                                                                                                                                 |
|               |                                                                                                                     |                                                                        |                                                                                                                            | The student doesn't  exist                                                                | @string            | The student doesn't exist                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
|               |                                                                                                                     | cohortManager.searchStudent(@string, @string)                          | The strings are the first and last names of the student to be removed from the cohort                                      | The student exists                                                                        | student @object    | cohortManager.seachStudent('Kyle', 'Bridgewater') =>        {         firstName: 'Kyle',         lastName: 'Bridgewater',         githubUsername: 'kyleUnderwater'         email: kylebridge@yahoo.com,         studentId: @number       }                                                                                                                                                                                                                                         |
|               |                                                                                                                     |                                                                        |                                                                                                                            | The student doesn't  exist                                                                | @string            | The student doesn't exist                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
|               |                                                                                                                     |                                                                        |                                                                                                                            |                                                                                           |                    |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
|               |                                                                                                                     |                                                                        |                                                                                                                            |                                                                                           |                    |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
|               |                                                                                                                     |                                                                        |                                                                                                                            |                                                                                           |                    |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |