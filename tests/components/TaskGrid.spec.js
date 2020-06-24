import { shallowMount } from '@vue/test-utils'
import TaskGrid from '@/components/TaskGrid'
import Task from '@/components/Task'

const factory = (args = {}) => shallowMount(TaskGrid, {
    propsData: {
        tasks: [],
        ...args.props
    }
})

describe('TaskGrid.vue', () => {
    it('render title', () => {
        const wrapper = factory()

        expect(wrapper.find('.title').exists()).toBeTruthy()
    })

    it('render all Task components correctly', () => {
        const wrapper = factory({
            props: {
                tasks: [
                    { name: 'wash the car' },
                    { name: 'take out the garbage' }
                ]
            }
        })

        expect(wrapper.findAllComponents(Task)).toHaveLength(2)
    })
})
