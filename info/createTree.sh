# Create estrutura

# Create paths
    # mkdir ./src/app/modules
    # mkdir ./src/app/shared
    # mkdir ./src/app/design-system


# party-resignation-date
    # mkdir -p ./src/app/modules/party-resignation-date/components
    # mkdir -p ./src/app/modules/party-resignation-date/pages    
    # mkdir -p ./src/app/modules/party-resignation-date/services/DTO/request
    # mkdir -p ./src/app/modules/party-resignation-date/services/DTO/response
    # npx ng g m modules/party-resignation-date/
    # npx ng g s modules/party-resignation-date/services/party-resignation-date --skipTests=true
    npx ng g c modules/party-resignation-date/pages/index
    # npx ng generate module modules/party-resignation-date/party-resignation-date-routing --flat --module=party-resignation-date