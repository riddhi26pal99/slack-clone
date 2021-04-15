import styled from 'styled-components';

function SidebarOptions({ Icon, title }) {
    return (
        <SidebarOptionContainer>
            {Icon && <Icon fontSize="size" style={{ padding: 10 }}/> }
            { Icon ? (
                    <h3>{title}</h3>
                ): (
                    <SidebarOptionChannel>
                        <span>#</span> {title}
                    </SidebarOptionChannel>
                )
            }
        </SidebarOptionContainer>
    )
}

export default SidebarOptions;

const SidebarOptionContainer = styled.div`
    display: flex;
    font-size: 12px;
    align-items: center;
    cursor: pointer;
    
    :hover{
        opacity: 0.9;
        background-color: #340e36;

        > h3 {
            font-weight: 500;
        }

        >h3 > span {
            padding: 15px;
        }
    }
`;

const SidebarOptionChannel = styled.div`

`;