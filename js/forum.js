const postsUrl='https://openapi.programming-hero.com/api/retro-forum/posts';

const postContainer=document.getElementById('posts-container');
const selectedPostContainer=document.getElementById('selected-post-container');
const totalPostCounter=document.getElementById('total-post-counter');

let countPost=1;

const loadPosts=()=>{
    fetch(postsUrl)
    .then(res=>res.json())
    .then(data=>{
        console.log(data);
        const postsArray=data.posts;
        console.log(postsArray);
        displayPosts(postsArray);
    })
}
const displayPosts=(arrayOfPosts)=>{
    arrayOfPosts.forEach(post => {
        console.log(post);

        const postCard=document.createElement('div');
        postCard.classList=`flex flex-col lg:flex-row gap-6 p-10  mb-6 rounded-2xl bg-[#F3F3F5] shadow-lg`;
        postCard.innerHTML=`

        <div class="relative">
            <img class="lg:w-24 rounded-2xl" src="${post.image}" alt="">
            <div class="w-4 h-4  rounded-full absolute -top-2 -right-1 ${post.isActive ? 'bg-[#10B981]' : 'bg-[#FF3434]'}"></div>
        </div>

        <div class="lg:w-4/5">
            <div class="flex gap-4 mb-3 justify-center lg:justify-start">
                <p class="text-[#12132DCC] text-base font-medium font-inter"># <span>${post.category
                }</span></p>
                <p class="text-[#12132DCC] text-base font-medium font-inter">Author: <span>${post.author.name}</span></p>
            </div>
            <div>
                <h3 class="text-[#12132D] text-xl font-bold text-center lg:text-left">${post.title}</h3>
            </div>
            <div>
                <p class="text-[#12132D99] text-base font-medium py-4 border-b-2 border-dashed text-center lg:text-left">${post.description}</p>
            </div>
            <div class="flex flex-col lg:flex-row justify-between items-center lg:items-start gap-4 lg:gap-0 mt-5">
                <div class="flex gap-4">
                    <div class="flex gap-2">
                        <div>
                            <img src="./images/sms.png" alt="">
                        </div>
                        <div>
                            <span class="text-[#12132D99] text-base font-medium">${post.comment_count
                            }</span>
                        </div>
                    </div>
                    <div class="flex gap-2">
                        <div>
                            <img src="./images/view.png" alt="">
                        </div>
                        <div>
                            <span class="text-[#12132D99] text-base font-medium">${post.view_count}</span>
                        </div>
                    </div>
                    <div class="flex gap-2">
                        <div>
                            <img src="./images/time.png" alt="">
                        </div>
                        <div>
                            <span class="text-[#12132D99] text-base font-medium">${post.posted_time}</span><span class="text-[#12132D99] text-base font-medium">min</span>
                        </div>
                    </div>
                </div>
                
                <div>
                    <button onclick="selectedPost('${post.title.replace(/'/g, "\\'")}', '${post.view_count}')">
                    <img src="./images/btn.png" alt="">
                    </button>
                </div>
            </div>
        </div>
        `;
        postContainer.appendChild(postCard);
    });
}

const selectedPost=(getTitle,getViewCount)=>{
    // console.log(getId);
    console.log(getTitle);
    console.log(getViewCount);
    const selectedPost=document.createElement('div');
    selectedPost.classList=`flex justify-between items-center shadow-md p-3 rounded-2xl mt-3 bg-white `;
    selectedPost.innerHTML=`
    <div class="w-44">
        <p class="text-[#12132D] text-base font-bold font-mulish">${getTitle}</p>
    </div>
    <div>
        <img src="./images/view.png" alt="">
    </div>
    <div>
        <p class="text-[#12132D99] text-base font-medium font-mulish">${getViewCount}</p>
    </div>
    `
    selectedPostContainer.appendChild(selectedPost);
    let totalCount=countPost++;
    console.log(totalCount);
    totalPostCounter.innerText=totalCount
}

loadPosts();