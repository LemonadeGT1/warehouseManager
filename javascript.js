

const packages = [{
  priorityLevel: 'express',
  isFragile: false,
  weight: 2,
  to: 'Sir Harrington IV',
  from: 'Sir Patrick',
  trackingNumber: '1324kjs'
},
{
  priorityLevel: 'standard',
  isFragile: true,
  weight: .5,
  to: 'Master Mercutio',
  from: 'Song Shi',
  trackingNumber: '1325sdk'
},
{
  priorityLevel: 'free',
  isFragile: true,
  weight: .5,
  to: 'Mistress Ravenfeather',
  from: 'Plastic Fork',
  trackingNumber: 'jffd147'
},
{
  priorityLevel: 'standard',
  isFragile: false,
  weight: 4,
  to: 'B. Robert Brown',
  from: 'Uncoded',
  trackingNumber: 'acdc145'
},
{
  priorityLevel: 'express',
  isFragile: true,
  weight: 6,
  to: 'Chancellor Wallace',
  from: 'The Emperor',
  trackingNumber: '4b2l0z'
},
{
  priorityLevel: 'standard',
  isFragile: false,
  weight: 5,
  to: 'Sarah Sharm',
  from: 'Sherman Lagoon',
  trackingNumber: '8081baz'
},
{
  priorityLevel: 'standard',
  isFragile: false,
  weight: 2,
  to: 'Commander Cody',
  from: 'Obi-Whaat',
  trackingNumber: '313es5e'
},
{
  priorityLevel: 'express',
  isFragile: false,
  weight: 2.5,
  to: 'Captain Jack',
  from: 'Mr. Turner',
  trackingNumber: '733tc4t'
},
{
  priorityLevel: 'free',
  isFragile: false,
  weight: 1.5,
  to: 'Luffy',
  from: 'Ace',
  trackingNumber: '9a8d7f'
},
{
  priorityLevel: 'standard',
  isFragile: false,
  weight: 2,
  to: 'Skywalker Ranch',
  from: 'Sound Runner',
  trackingNumber: '225llt34'
},
{
  priorityLevel: 'free',
  isFragile: true,
  weight: 12,
  to: 'Tae Lien',
  from: 'Fried Rice',
  trackingNumber: 'suz2367'
}]


let packageElem = document.getElementById('packages')

function drawPackages(packages){
  let template = ``
  packages.forEach(pack => {
      template += `<div class="package"><h4>To: ${pack.to}</h4><h5>ID: ${pack.trackingNumber}</h5></div>` 
  })
  packageElem.innerHTML = template
}


function drawFragilePackages(){
  let fragilePackages = packages.filter(p => p.isFragile == true)
  drawPackages(fragilePackages)
}

function drawPriorityPackages(){
  let priorityPackages = packages.filter(p => p.priorityLevel == 'express')
  drawPackages(priorityPackages)
}

function drawHeavyPackages(){
  let heavyPackages = packages.filter(p => p.weight > 2)
  drawPackages(heavyPackages)
}

function drawUncodedPackages(){
  let uncodedPackages = packages.filter(p => p.from == 'Uncoded')
  drawPackages(uncodedPackages)
}

function drawHeavyExpressPackages(){
  let heavyExpressPackages = packages.filter(p => p.weight > 2 && p.priorityLevel == 'express')
  drawPackages(heavyExpressPackages)
  console.log(heavyExpressPackages)
}

function drawAllPackages(){
  drawPackages(packages)
}




// Initial Load
drawPackages(packages)
//console.log(packages)

