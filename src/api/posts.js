import { post } from './index';

function createPost(postData) {
  return post.post('/', postData);
}

function updatePost(postData) {
  return post.put('/', postData);
}

function deletePost(studySeq) {
  return post.delete('/', {
    data: {
      studySeq,
    },
  });
}

function fetchPosts() {
  return post.get('/');
}

function fetchPostById(studySeq) {
  return post.get('/', {
    params: {
      studySeq,
    },
  });
}

function fetchPostsByUserSeqAndStudyType(userSeq, studyTypeList) {
  return post.get('/', {
    params: {
      userSeq,
      studyTypeList,
    },
  });
}

function fetchPostsInStudyRoom(userSeq, studyType) {
  return post.get('/', {
    params: {
      origin: 'studyRoom',
      userSeq,
      studyType,
    },
  });
}

function fetchPostsByStudyType(studyTypeList) {
  return post.get('/', {
    params: {
      studyTypeList,
    },
  });
}

function fetchPostsByKeywordAndStudyType(search, page, studyTypeList) {
  if (search == '') {
    return post.get('/', {
      params: {
        size: 6,
        page,
        studyTypeList,
      },
    });
  } else {
    return post.get('/', {
      params: {
        search,
        size: 6,
        page,
        studyTypeList,
      },
    });
  }
}

function getStudyForMyPage(userSeq) {
  console.log('userSeq', userSeq);
  return post.get(`?isMyPage=YES&userSeq=${userSeq}&studyType=READY`);
} //신청한 스터디 가져오기 위함

function getCompletedStudy(userSeq) {
  return post.get(`?origin=studyRoom&userSeq=${userSeq}&studyType=완료`);
} //완료된 스터디 개수 가져오기 위함

export {
  createPost,
  updatePost,
  deletePost,
  fetchPosts,
  fetchPostById,
  fetchPostsByUserSeqAndStudyType,
  fetchPostsInStudyRoom,
  fetchPostsByStudyType,
  fetchPostsByKeywordAndStudyType,
  getStudyForMyPage,
  getCompletedStudy,
};
