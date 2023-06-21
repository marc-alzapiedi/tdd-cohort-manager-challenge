class CohortManager {
  constructor() {
    this.cohortData = []
  }

  create(cohort) {
    const obj = {
      cohortName: cohort,
      students: []
    }

    this.cohortData.push(obj)
    return this.cohortData
  }

  searchCohort(cohort) {
    const searchResult = this.cohortData.filter((obj) => {
      return obj.cohortName === cohort
    })

    if (searchResult[0] === undefined) {
      return "The cohort doesn't exist"
    }
    return searchResult[0]
  }

  addStudent(firstName, lastName, githubUsername, email, cohort) {
    if (this.searchCohort(cohort) === "The cohort doesn't exist") {
      return "The cohort doesn't exist"
    }

    this.searchCohort(cohort).students.push({
      firstName,
      lastName,
      githubUsername,
      email,
      id:
        (`${this.cohortData.indexOf(this.searchCohort(cohort)) + 1}` +
          `1` +
          `${this.searchCohort(cohort).students.length + 1}`) /
        '1'
    })
    return this.cohortData
  }
}

module.exports = CohortManager
