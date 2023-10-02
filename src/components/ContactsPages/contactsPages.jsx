import { BookContacts } from "components/Contacts/bookContacts"
import { InputBookContacts } from "components/Form/inputBookcontacts"

export const ContactsPages = () => {
    return(
        <div>
            <InputBookContacts/>
            <BookContacts/>
            
        </div>
    )
}