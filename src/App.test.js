

.forEach((item) => {
  if(updatedData.filter(i=>i.name===item.beer).length===0){
    updatedData.push({
        name: item.beer,
        amount: 0,
        isStar: false,
      })
  }}
  );

  const y = props.ready.order;
const z = props.ready.id;
const x=[];

