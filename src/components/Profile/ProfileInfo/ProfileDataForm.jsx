import React from "react";
import { reduxForm } from "redux-form";
import { createField, Input, Textarea } from "../../common/FormsControls/FormsControls"

const ProfileDataForm = ({handleSubmit, profile}) => {
    return  <form onSubmit={handleSubmit}>
                <div><button>save</button></div>
                <div>
                    <b>Full name</b>: {createField("Full name", "fullName", [], Input)}
                     
                </div>
                <div>
                    <b>Looking for a job</b>: {profile.lookingForAJob ? "yes" : "no" }  
                    {createField( "", "lookingForAJob", [], Input, {type: "checkbox"} )}
                </div>
               
                <div>
                    <b>My professional skills</b>: {profile.lookingForAJobDescription }  
                    {createField( "My professional skills", "lookingForAJobDescription", [], Textarea )}
                </div>
                
                <div>
                <b>About me</b>: {profile.aboutMe} 
                {createField( "About me", "aboutMe", [], Textarea )}
                </div>
               {/* <div>
                <b>Contacts</b>: {Object.keys(profile.contacts).map(key => {
                    return <Contact key={key} contactTitle={key} contactValue={profile.contacts[key]} />
                })}  
                </div>*/}
            </form>
}

const ProfileDataFormReduxForm = reduxForm({form: 'edit-profile'}) (ProfileDataForm)

export default ProfileDataFormReduxForm;