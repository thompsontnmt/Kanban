import { DeleteIcon } from '@chakra-ui/icons';
import { Box, IconButton, Textarea } from '@chakra-ui/react';
import { TaskModel } from '../utils/models';

type TaskProps = {
    index: number;
    task: TaskModel;
};

function Task({ index, task }: TaskProps) {
    return (
        <Box
            as='div'
            role='group'
            position='relative'
            rounded='lg'
            w={200}
            pl={3}
            pr={7}
            pt={3}
            pb={1}
            boxShadow='xl'
            cursor='grab'
            bgColor={task.color}
        >

        </Box>
    )
}

export default Task;