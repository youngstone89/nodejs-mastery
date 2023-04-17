const NO_NEW_EVENTS = {
  messages: [],
  chatEnded: false,
  statusCode: 0,
  alias: '249',
  secureKey: '45327f306556129f',
  userId: '00F9568B2DA601BA',
  tenantName: 'Resources',
  nextPosition: 5
}

console.log(NO_NEW_EVENTS.hasOwnProperty('messages'))
console.log(NO_NEW_EVENTS.messages.length)

const NEW_MESSAGES = {
  messages:
[{
  from: { nickname: 'AgentNick', participantId: 3, type: 'Agent' },
  index: 7,
  text: 'hello',
  type: 'Message',
  utcTime: 1451961875000
}],
  chatEnded: false,
  statusCode: 0,
  alias: '249',
  secureKey: '45327f306556129f',
  userId: '00F9568B2DA601BA',
  tenantName: 'Resources',
  nextPosition: 8
}

const AGENT_HAS_LEFT =
{
  messages:
[{
  from: {
    nickname: 'AgentNick',
    participantId: 3,
    type: 'Agent'
  },
  index: 9,
  type: 'ParticipantLeft',
  utcTime: 1451961917000
}, {
  from: {
    nickname: 'Maria',
    participantId: 1,
    type: 'Client'
  },
  index: 10,
  type: 'ParticipantLeft',
  utcTime: 1451961917000
}],
  chatEnded: true,
  statusCode: 0,
  alias: '249',
  secureKey: '45327f306556129f',
  userId: '00F9568B2DA601BA',
  tenantName: 'Resources',
  nextPosition: 1
}

const TEMPORARY_LEFT = {
  messages: [
    {
      from: { nickname: 'AgentNick', participantId: 3, type: 'Agent' },
      index: 12,
      type: 'ParticipantLeft',
      utcTime: 1451961917000,
      eventAttributes: { 'general-properties': { 'reason-for-leave': 'HOLD' } }
    }],
  chatEnded: false,
  statusCode: 0,
  alias: '249',
  secureKey: '45327f306556129f',
  userId: '00F9568B2DA601BA',
  tenantName: 'Resources',
  nextPosition: 14
}
