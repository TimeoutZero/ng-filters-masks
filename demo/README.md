# Holmes Admin v2
===

## i18n pattern
```js
{
  "CRUD_NAME" : {
    "HEADER": "<<crudName>> <span class='context'>{{name}}</span>", //must have {{name}} key for header use
    "SUBHEADERS": {},
    "LABELS": {},
    "PLACEHOLDERS": {},
    "BUTTONS": {},
    "ALERTS": {
      "<<action>>": {
        "SUCCESS": "<<entity>> <<verbParticiple>>",
        "ERROR": {
          "DEFAULT": "Erro ao tentar <<action>> <<entity>>, @:GENERAL.PLEASE_TRY_AGAIN"
        }
        "COMFIRM" : {
          "TITLE" : "@:<<action>>",
          "TEXT"  : "Realmente deseja excluir <strong>{{context}}</strong>?"
        }
      }
    }
  }
}
```



## Nomenclature
Some terms have been changed at version 2 of holmes admin:

| new term   | means...  |
|---|---|
| Document type ("Tipo de documento")  |  "Nature" ("Natureza") |
| Group ("Grupo")  |  Profile ("Perfil") |
| "Campo" | "Característica" |
| Nature Group ("Documento Relacionado") | Related document ("Documento Relacionado") |




## TO-DOS
___

### APIs
- Nova API para permissões de perfil
- [Grupos/perfis] [Listagem] Nature por perfil
- [Natures] [Listagem] Perfis que acessam a natureza
- Retornar ordenação 'humanizada' para listas `[1, 10, 2]` > `[1, 2, 10]`
- Retornar novos campos necessários para montar tabelas (conferir layouts)
- [Campos/Caracteristicas] novo serviço para listas relacionadas
  -> Android, Assistentes, Super-admin, Admin, Holmes

- [Plano de utilização] [POST] Quando chamo o post ele dá 200 mas retorna dados antigos
- [Usuários] Arrumar url para perfis, só está funcionando com um `/` no final `holmes/api/users/{id}/profiles/`
- [Usuários/Restrições] url para remover restrição está fora do padrão das outras (`/restriction` enquanto as outras estão `/restrictions` )
- [Usuários/Restrições] Arrumar serviço, está permitindo salvar mais do que uma restrição para a mesma caracteristica/valor, porém da erro depois que já tem 2 restrições iguais
    `result returns more than one elements; nested exception is javax.persistence.NonUniqueResultException: result returns more than one elements`

- [Natures] [EDIT] [GET] `holmes/api/natures/:id` It's not bringing properties type


### i18n - (Not included yet)

- GETS
  + "UserEntity.notFound"
    "Usuário não encontrado"

  + "UserRestrictionEntity.notFound"
    "Restrição de usuário não encontrada"

  + "property.notFound"
    "Essa característica não pode mais ser encontrada!"

- OLD
  + "restriction.are.being.used" || "restriction.inUse"
    "Você não pode remover uma restrição que está sendo utilizada!"


## Questions
