let vadatapass = "{'Autentication':'u','language':'e', 'skill_id':'CCC_Chat_EN'}"
vadatapass = vadatapass.replaceAll("'", '"')
console.log(vadatapass)
try {
  const vaDataPassObj = JSON.parse(vadatapass)
  console.log(vaDataPassObj)
  console.log(vaDataPassObj.Autentication)
  console.log(vaDataPassObj.language)
  console.log(vaDataPassObj.skill_id)
} catch (error) {
  console.log(error)
}

const vaDataPassObj = {
  Autentication: 'u',
  language: 'e',
  skill_id: 'CCC_Chat_EN'
}

vadatapass = JSON.stringify(vaDataPassObj)
console.log(vadatapass)
