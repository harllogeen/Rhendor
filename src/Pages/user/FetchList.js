import React from 'react'
import HttpRequest, { ProcessHttpMessage } from 'des-http-processor'
import { MyConfig } from '../../MyConfig'
import { toast } from 'react-toastify'

export const FetchList = (self, fieldName, route, showNotification = true, notificationName = null) => {
    self.state = {
        [fieldName]: {}
    }

    let name = fieldName

    if (notificationName)
        name = notificationName

    if (showNotification)
        toast.info('Checking for ' + name + ' please wait..')

    // fetch list
    HttpRequest(`${MyConfig.apiUrl + route}`, 'get', null, ProcessHttpMessage).then(((response) => {
        if (response.data !== null && response.data !== undefined)
            self.setState({ [fieldName]: response.data })

        toast.success('We are done checking')
        return response;
    }), ((response) => {
        toast.warn(response.description);
    }));
}
