<script>
    import { debugData } from '../utils/debugData';

    let debugGlobalData = {
        user: {
            id: "1234567890",
            name: "Daniel Jackson",
            email: "DanielJackson@email.com",
            phone: "(555) 555-1234",
        },
    time: "2:00",
    background: "https://wallpapercave.com/wp/wp3611699.jpg",
    }
    debugData([
        {
            action: 'phone:InitialData',
            data: debugGlobalData,
        },
    ]);




</script>

