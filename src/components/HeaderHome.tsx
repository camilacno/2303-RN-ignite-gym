import { TouchableOpacity } from 'react-native'
import { Heading, HStack, Text, VStack, Icon } from 'native-base'
import { MaterialIcons } from '@expo/vector-icons'

import { useAuth } from '@hooks/useAuth'
import { api } from '@services/api'
import UserPhotoDefault from '@assets/userPhotoDefault.png'
import { UserPhoto } from './UserPhoto'

export function HomeHeader() {
  const { signOut, user } = useAuth()

  return (
    <HStack bg="gray.600" pt={16} px={8} py={8} alignItems="center">
      <UserPhoto
        source={
          user.avatar
            ? { uri: `${api.defaults.baseURL}/avatar/${user.avatar}` }
            : UserPhotoDefault
        }
        size={16}
        alt="Imagem do usuário"
        mr={4}
      />

      <VStack flex={1}>
        <Text color="gray.100" fontSize="md">
          Olá,
        </Text>

        <Heading color="gray.100" fontSize="md" fontFamily="heading">
          {user.name}
        </Heading>
      </VStack>

      <TouchableOpacity>
        <Icon
          as={MaterialIcons}
          name="logout"
          color="gray.200"
          size={7}
          onPress={signOut}
        />
      </TouchableOpacity>
    </HStack>
  )
}
