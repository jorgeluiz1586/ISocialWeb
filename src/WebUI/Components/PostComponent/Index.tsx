import React from 'react';

interface Props {
    userName: string;
    userProfilePhoto: string;
    postDescription: string;
    postImage: string;
}

function PostComponent(props: Props) {
    return (
        <div className="i-social-post-card">
            <div className="i-social-post-card-header">
                <div className="i-social-post-card-header-profile-photo"><img src={props.userProfilePhoto} alt="" /></div>
                <span>{props.userName}</span>
            </div>
            <div className="i-social-post-card-info-area">
                <p>{props.postDescription}</p>
            </div>
            <div className="i-social-post-card-section">
                <img className="i-social-post-card-image" src={props.postImage} alt="" />
            </div>
            <div className="i-social-post-card-footer">
                <button><i className="fa-regular fa-thumbs-up"></i></button>
                <button><i className="fa-regular fa-comment"></i></button>
                <button><i className="fa-solid fa-ellipsis-vertical"></i></button>
            </div>
        </div>
    );
}

export default PostComponent;