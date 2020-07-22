//given candidate data that looks like...
// [ { candidate_id: 'biden-1036', first: 'Joseph R.', last: 'Biden' },
//   { candidate_id: 'sanders-1445',
//     first: 'Bernie',
//     last: 'Sanders' },
//   { candidate_id: 'warren-62244',
//     first: 'Elizabeth',
//     last: 'Warren' }]

//and source data that looks like...
// [ { pId: 'Dem',
//     State:
//       [
//         { sId: 'AL',
//           Cand:
//           [ { cId: '1036', cName: 'Biden', dTot: '44' },
//             { cId: '1445', cName: 'Sanders', dTot: '8' },
//             { cId: '62244', cName: 'Warren', dTot: '0' },
//             { cId: '32324', cName: 'Bloomberg', dTot: '0' },
//             { cId: '67933', cName: 'Buttigieg', dTot: '0' },
//           ]
//         },


//write a function that transform the data into an object that uses the full candidate name and tracks the total delegates and the delegate total from each state

exports.apply = (sourceData, outputData) => {
  //config candidate name data
  let configNames = (sourceData.configData || {}).candidates || [];
  //variable to store candidate id and full name
  let candidateNames = {}
  //use the config candidate names to create a new object with just the candidate id & full name for all candidates
  configNames.map((c) => {candidateNames[c.candidate_id.replace(/[^0-9]/g, '')] = `${c.first} ${c.last}`})
  //object to store delegate data
  const delegateData = {}

  //iterate through parties
  for (let i = 0; i < sourceData.delegates.length; i++) {
    //iterate through states
    for (let j = 0; j < sourceData.delegates[i].State.length; j++) {
      //iterate through candidates
      for (let k = 0; k < sourceData.delegates[i].State[j].Cand.length; k++) {
        //if candidate not in delegate data object then add candidate
        if (delegateData[candidateNames[sourceData.delegates[i].State[j].Cand[k].cId]] === undefined) {
          delegateData[candidateNames[sourceData.delegates[i].State[j].Cand[k].cId]] = {
            total: Number(sourceData.delegates[i].State[j].Cand[k].dTot),
            [sourceData.delegates[i].State[j].sId]: Number(sourceData.delegates[i].State[j].Cand[k].dTot),
          };
        //if already present in object then increment total and add new state count
        } else {
          delegateData[candidateNames[sourceData.delegates[i].State[j].Cand[k].cId]].total += Number(sourceData.delegates[i].State[j].Cand[k].dTot);
          delegateData[candidateNames[sourceData.delegates[i].State[j].Cand[k].cId]][sourceData.delegates[i].State[j].sId] = Number(sourceData.delegates[i].State[j].Cand[k].dTot);
        }
      }
    }
  }

  //overwrite input delegate data with newly configure data
  outputData.delegates = delegateData;

  return outputData;
};

//sample output

// delegates": {
//   "Joseph R. Biden": {
//     "total": 2507,
//     "AL": 44,
//     "AK": 8,
//     "AS": 0,
//     "AZ": 39,
//     "AR": 19,
//     "CA": 172,
//     "CO": 26,
//     "CT": 0,
//     "DE": 21,
//     "DA": 4,
//     "DC": 20,
//     "FL": 162,
//     "GA": 105,