// selecting elements
var graph=document.querySelector('.graph');
var newArr=document.querySelector('.newArr');
var bubbleSrt=document.querySelector('.BubbleSort');
var selectionSrt=document.querySelector('.Selectionsort');
var insertionSrt=document.querySelector('.InsertionSort');
var mergeSrt=document.querySelector('.MergeSort');
var quickSrt=document.querySelector('.QuickSort');
var array_size=document.getElementById('arr_sz').value;
var arr_sz=document.getElementById('arr_sz');

//defining array
var arr=[];

// adding array listeners
newArr.addEventListener('click',()=>{
    
    clearSpace();
    clearArray();
    array_size=document.getElementById('arr_sz').value;
    createRandomArray();    
    createGraph();

});
bubbleSrt.addEventListener('click',async function(){
    disbaleSortingButtons()
    await bubbleSort();
    enableSortingButtons();
});
selectionSrt.addEventListener('click',async function(){
    disbaleSortingButtons()
    await selectionSort();
    enableSortingButtons();
});
quickSrt.addEventListener('click',async function(){
    disbaleSortingButtons();
    await quickSort(0,array_size-1);
    enableSortingButtons();
});
insertionSrt.addEventListener('click',async function(){
    disbaleSortingButtons();
    await insertionSort();
    enableSortingButtons();
});
mergeSrt.addEventListener('click',async function(){
    disbaleSortingButtons();
    await mergeSort(0,array_size-1);
    enableSortingButtons();
})

//disable buttons during sorting process
function disbaleSortingButtons()
{
    newArr.disabled=true;
    bubbleSrt.disabled=true;
    selectionSrt.disabled=true;
    insertionSrt.disabled=true;
    mergeSrt.disabled=true;
    quickSrt.disabled=true;

}

//enable buttons after sorting
function enableSortingButtons()
{
    newArr.disabled=false;
    bubbleSrt.disabled=false;
    selectionSrt.disabled=false;
    insertionSrt.disabled=false;
    mergeSrt.disabled=false;
    quickSrt.disabled=false;
}
//function to clear array
function clearArray()
{
    arr=[];
}

//function to create random array
function createRandomArray()
{
    for(var i=0;i<array_size;i++)
    {
        var x=Math.floor(Math.random()*100)+1;
        arr.push(x);
    }
}

// to create a graph of different heights based on elements of array
function createGraph()  
{
    for(var i=0;i<array_size;i++)
    {   
        var bar=document.createElement("div"); //add a div tag
        bar.classList.add("bar"); // add a class to a tag
        bar.setAttribute('id',"bar"+i); //add an id to a tag
        graph.appendChild(bar); //append the tag to parent tag
        document.getElementById("bar"+i).style.height=arr[i]+"%"; //add property heoght using js
    }
}

 //to clear the initial graph created
function clearSpace() 
{
    for(var i=0;i<array_size;i++)
    {   
        var myObj=document.getElementById("bar"+i);
        if(myObj!=null)myObj.remove();
    }
}

// function to add Delay
function resolveAfter2Seconds() {
    var speed=document.getElementById('spd').value;
    return new Promise(resolve => {
      setTimeout(() => {
        resolve('resolved');
      }, 100-speed);
    });
  }
  
//function to swap two bars in html
async function swap(el1,el2)  
{
    const result = await resolveAfter2Seconds();
    var style1=window.getComputedStyle(el1);
    var style2=window.getComputedStyle(el2);

    var transform1=style1.getPropertyValue("height");
    var transform2=style2.getPropertyValue("height");
    
    el1.style.height=transform2;
    el2.style.height=transform1;
}

//////////////////////////////////////////////////////// BUBBLE SORT /////////////////////////////////////////////////////////
async function bubbleSort()
{   
    for(var i=0;i<array_size-1;i++)
    {
        for(var j=0;j<array_size-i-1;j++)
        {
            if(arr[j]>arr[j+1])
            {   
                
                var element1=document.getElementById("bar"+j);
                element1.style.backgroundColor="red";
                var element2=document.getElementById("bar"+(j+1));
                element2.style.backgroundColor="red";
                element2.style.backgroundColor="red";
                const result = await resolveAfter2Seconds();
                if(element2!=null && element1!=null)swap(element1,element2);
                element1.style.backgroundColor="yellow";
                element2.style.backgroundColor="green";
                var x=arr[j];
                arr[j]=arr[j+1];
                arr[j+1]=x;
            }
            
        }
        element1.style.backgroundColor="green";
        const result = await resolveAfter2Seconds();
        element1.style.backgroundColor="green";
    }
    for(var i=0;i<array_size;i++)
    {
        var element1=document.getElementById("bar"+i);
        element1.style.backgroundColor="green";
    }
}

////////////////////////////////////////////////// SELECTION SORT ///////////////////////////////////////////////
async function selectionSort()
{
    for(var i=0;i<array_size-1;i++)
    {
        var min_index=i;
        for(var j=i+1;j<array_size;j++)
        {
            if(arr[j]<arr[min_index])min_index=j;
        }
        var element1=document.getElementById("bar"+min_index);
        element1.style.backgroundColor="red";
        var element2=document.getElementById("bar"+i);                
        element2.style.backgroundColor="red";
        const result = await resolveAfter2Seconds();
        if(element2!=null && element1!=null)swap(element1,element2);
        element1.style.backgroundColor="yellow";
        element2.style.backgroundColor="green";
        var x=arr[min_index];
        arr[min_index]=arr[i];
        arr[i]=x;
        element1.style.backgroundColor="green";
        const result2 = await resolveAfter2Seconds();
        element1.style.backgroundColor="yellow";
    }
    for(var i=0;i<array_size;i++)
    {
        var element1=document.getElementById("bar"+i);
        element1.style.backgroundColor="green";
    }
}

///////////////////////////////////////////////////  QUICK SORT  /////////////////////////////////////////////////////
async function quickSort(low,high)
{   
    if(low<high)
    {   var pivot=arr[high];
        var i=(low-1);
        for(var j=low;j<=high-1;j++)
        {
            if(arr[j]<pivot)
            {
                i++;
                var element1=document.getElementById("bar"+i);
                element1.style.backgroundColor="red";
                var element2=document.getElementById("bar"+j);                
                element2.style.backgroundColor="red";
                const result = await resolveAfter2Seconds();
                if(element2!=null && element1!=null)swap(element1,element2);
                element1.style.backgroundColor="yellow";
                element2.style.backgroundColor="yellow";
                var x=arr[i];
                arr[i]=arr[j];
                arr[j]=x;
                element1.style.backgroundColor="yellow";
                const result2 = await resolveAfter2Seconds();
                element1.style.backgroundColor="yellow";
            }
            
        }
        var ell1=document.getElementById("bar"+(i+1));
            var ell2=document.getElementById("bar"+high);
            ell1.style.backgroundColor="red";
            ell2.style.backgroundColor="red";
            const result = await resolveAfter2Seconds();
            if(ell2!=null && ell1!=null)swap(ell1,ell2);
            ell1.style.backgroundColor="yellow";
            ell2.style.backgroundColor="yellow";
            var x=arr[i+1];
            arr[i+1]=arr[high];
            arr[high]=x;
            ell1.style.backgroundColor="yellow";
            ell2.style.backgroundColor="yellow";
        var pi=i+1;
        quickSort(low,pi-1);
        quickSort(pi+1,high);
    }
    for(var i=0;i<array_size;i++)
    {
        var el=document.getElementById("bar"+i);
        el.style.backgroundColor="green";
    }
}


///////////////////////////////////////////////// INSERTION SORT  ///////////////////////////////////////////////////
async function insertionSort()
{   //console.log("here");
    var j;
    var key;
    for(var i=1;i<array_size;i++)
    {
         key=arr[i];
         j=i-1;
        while(j>=0 && arr[j]>key)
        {   
            var element1=document.getElementById("bar"+(j+1));
            //console.log("element 1"+element1);
            var element2=document.getElementById("bar"+j);
            element1.style.backgroundColor="red";
            element2.style.backgroundColor="red";
            element1.style.height=element2.style.height;
            arr[j+1]=arr[j];
            j=j-1;
            const result = await resolveAfter2Seconds();
            element1.style.backgroundColor="green";
            element2.style.backgroundColor="green";
        }
        var el1=document.getElementById("bar"+(j+1));
        console.log(el1);
        el1.style.height=key+"%";
        el1.style.backgroundColor="green";
        arr[j+1]=key;
    }
}

//////////////////////////////////////////// MERGE SORT ///////////////////////////////////

async function merge(l,m,r)
{
    var n1=m-l+1;
    var n2=r-m;

    var L=[];
    var R=[];
    for(var i=0;i<n1;i++)
    {   var result=await resolveAfter2Seconds();
        var el=document.getElementById("bar"+arr[l+i]);
        if(el!=null)el.style.backgroundColor="red";
        L.push(arr[l+i]);
    }
    for(var i=0;i<n2;i++)
    {   var result=await resolveAfter2Seconds();
        var el=document.getElementById("bar"+arr[m+l+i]);
        if(el!=null)el.style.backgroundColor="red";
        R.push(arr[m+1+i]);
    }
    var result=await resolveAfter2Seconds();
    var i=0;
    var j=0;

    var k=l;

    while(i<n1 && j<n2)
    {   var result=await resolveAfter2Seconds();
        if(L[i]<=R[j])
        {   
            arr[k]=L[i];
            var el1=document.getElementById("bar"+k);
            el1.style.backgroundColor="red";
            el1.style.height=L[i]+"%";
            el1.style.backgroundColor="green";
            i++;
        }
        else
        {   
            arr[k]=R[j];
            var el1=document.getElementById("bar"+k);
            el1.style.backgroundColor="red";
            el1.style.height=R[j]+"%";
            el1.style.backgroundColor="green";
            j++;
        }
        k++;
    }
    //var result=await resolveAfter2Seconds();
    while(i<n1)
    {   var result=await resolveAfter2Seconds();
        arr[k]=L[i];
        var el1=document.getElementById("bar"+k);
        el1.style.backgroundColor="red";
        el1.style.height=L[i]+"%";
        el1.style.backgroundColor="green";
        i++;
        k++;
    }
    //var result=await resolveAfter2Seconds();
    while(j<n2)
    {   var result=await resolveAfter2Seconds();
        arr[k]=R[j];
        var el1=document.getElementById("bar"+k);
        el1.style.backgroundColor="red";
        el1.style.height=R[j]+"%";
        el1.style.backgroundColor="green";
        j++;
        k++;
    }
}
async function mergeSort(l,r)
{   
    if(l>=r)
    {   
        return;
    }
    var m=l+Math.floor((r-l)/2);
    await mergeSort(l,m);
    await mergeSort(m+1,r);
    await merge(l,m,r);
    
}






