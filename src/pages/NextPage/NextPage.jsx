function NextPage(params) {
  const { appData } = params;
  console.log(appData.stock.results);
  return (
    <div>
      {appData.stock.results.map(item => (
        <p>{item.stimulator.technical.device_identifier}</p>
      ))}
    </div>
  );
}

export default NextPage;
