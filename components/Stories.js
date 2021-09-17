import StoryCard from "./StoryCard"

const stories = [
    {
        name: '李阳',
        src: '/story1.jpg',
        profile: '/profile1.jpg',
    },
    {
        name: '赵晨',
        src: '/story2.jpg',
        profile: '/profile2.jpg',
    },
    {
        name: '张晓飞',
        src: '/story3.jpg',
        profile: '/profile3.jpg',
    },
    {
        name: 'James',
        src: '/story4.jpg',
        profile: '/profile4.jpg',
    },
    {
        name: 'Ding',
        src: '/story5.jpg',
        profile: '/profile5.jpg',
    },
]


function Stories() {
    return (
        <div className="flex justify-center space-x-3 mx-auto">
            {
                stories.map(
                    (story) => (
                        <StoryCard name={story.name} src={story.src} profile={story.profile} key={story.src}></StoryCard>
                    )
                )
            }
        </div>
    )
}

export default Stories
