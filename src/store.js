import { create } from 'zustand';

export const useComments = create((set) => ({
  comments: [],
  isOpen: false,
  setOpen: () => {
    set((state) => ({ isOpen: !state.isOpen }));
  },
  setComments: (data) => {
    set({ comments: data });
  },
}));

export const usePosts = create((set) => ({
    posts: [],
    setPosts: (data) => {
        set({ posts: [...data] });
    },
    setLiked: (postId, isLiked) => {
        set((state) => ({
            posts: state.posts.map((post) => {
                if (post.postId === postId) {
                    return { ...post, isLiked: !isLiked };
                }
                return post;
            }),
        }));
    },
}));

export const useReports = create((set) => ({
    isReportOpen: false,
    setReportOpen: () => {
      set((state) => ({ isReportOpen: !state.isReportOpen }));
    },
}));

export const useNavigationStore = create((set) => ({
    navigation: null,
    setNavigation: (navigation) => set({ navigation }),
  }));

export const useSearchOpen = create((set) => ({
  isKeyboardOpen: false,
  setKeyboardStatus: (isOpen) => set({ isKeyboardOpen: isOpen }),
}));

export const usePostCreating = create((set) => ({
  isPostCreating: true,
  setPostCreating: () => {
    set((state) => ({ isPostCreating: !state.isPostCreating }));
  },
}));

export const useImageToPost = create((set) => ({
  PostImage: "",
  setPostImage: (image) => set({ PostImage:image }),
}));

export const useUserDetails= create((set) => ({
  userDetails: {
    username:"X.bruhh",
    profilePic:"https://randomuser.me/api/portraits/men/10.jpg",
    name:"ayushman lakshkar",
    bio:['i am a dev','i like football'],
    followers:204,
    following:44,
    posts:4
  },
  setUserDetails: (data) => {
    set({ userDetails: data });
  },
}));

export const useChatting =create((set)=>({
  chattingWith:{
    profilePic:null,
username:null,
name:null
  },
  setChattingWith:(user)=>set({chattingWith:user})
}))

export const useExplorePostOpen=create((set)=>({
  explorePost:null,
  isExplorePostOpen:false,
  setExplorePostOpen:()=>set((state)=>({isExplorePostOpen:!state.isExplorePostOpen})),
  setExplorePost:(data)=>{set({explorePost:data})},
}))