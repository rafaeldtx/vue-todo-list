import { shallowMount } from '@vue/test-utils'
import Task from '@/components/Task'

const factory = (args) => shallowMount(Task, {
    propsData: {
        ...args.props
    }
})

describe('Task.vue', () => {
  it('render task name ', () => {
    const wrapper = factory({
        props: {
            task: {
                name: 'wash the dishes'
            }
        }
    })

    expect(wrapper.text()).toBe('wash the dishes')
  });
});
