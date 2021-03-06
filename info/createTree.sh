# Create estrutura

# CREATE PATH #
    # mkdir ./src/app/modules
    # mkdir ./src/app/shared
    # mkdir ./src/app/design-system

# CREATE COMPONENTS #
# home
    # mkdir -p ./src/app/modules/home/components
    # mkdir -p ./src/app/modules/home/pages    
    # mkdir -p ./src/app/modules/home/services/DTO/request
    # mkdir -p ./src/app/modules/home/services/DTO/response
    # npx ng g m modules/home/
    # npx ng g s modules/home/services/home --skipTests=true
    # npx ng g c modules/home/pages/home
    # npx ng generate module modules/home/home-routing --flat --module=home


# party-resignation-date
    # mkdir -p ./src/app/modules/party-resignation-date/components
    # mkdir -p ./src/app/modules/party-resignation-date/pages    
    # mkdir -p ./src/app/modules/party-resignation-date/services/DTO/request
    # mkdir -p ./src/app/modules/party-resignation-date/services/DTO/response
    # npx ng g m modules/party-resignation-date/
    # npx ng g s modules/party-resignation-date/services/party-resignation-date --skipTests=true
    # npx ng g c modules/party-resignation-date/pages/party-resignation-date
    # npx ng generate module modules/party-resignation-date/party-resignation-date-routing --flat --module=party-resignation-date

# party-resignation-category
    # mkdir -p ./src/app/modules/party-resignation-category/components
    # mkdir -p ./src/app/modules/party-resignation-category/pages    
    # mkdir -p ./src/app/modules/party-resignation-category/services/DTO/request
    # mkdir -p ./src/app/modules/party-resignation-category/services/DTO/response
    # npx ng g m modules/party-resignation-category/
    # npx ng g s modules/party-resignation-category/services/party-resignation-category --skipTests=true
    # npx ng g c modules/party-resignation-category/pages/party-resignation-category
    # npx ng generate module modules/party-resignation-category/party-resignation-category-routing --flat --module=party-resignation-category

# CREATE SHARED #

# shared
    # npx ng g m shared/
    # mkdir -p ./src/app/shared/components
    # mkdir -p ./src/app/shared/enum
    # mkdir -p ./src/app/shared/models
    # mkdir -p ./src/app/shared/utils
    # mkdir -p ./src/app/shared/services
    # mkdir -p ./src/app/shared/mocks
    # mkdir -p ./src/app/shared/pipes
    # mkdir -p ./src/app/shared/directives
    # mkdir -p ./src/app/shared/utils

# shared components
    # ng g c shared/components/header