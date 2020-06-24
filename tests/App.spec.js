import { shallowMount } from '@vue/test-utils'
import App from '@/App'
import TaskGrid from '@/components/TaskGrid'

const factory = (args) => shallowMount(App, {
    ...args
})

describe('App.vue', () => {
    it('renders TaskGrid', () => {
        const wrapper = factory()

        expect(
            wrapper.findComponent(TaskGrid).exists()
        ).toBeTruthy()
    })
})
