import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PersonDocumentCreateWithoutPersonInput } from "../inputs/PersonDocumentCreateWithoutPersonInput";
import { PersonDocumentWhereUniqueInput } from "../inputs/PersonDocumentWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class PersonDocumentCreateOrConnectWithoutPersonInput {
  @TypeGraphQL.Field(_type => PersonDocumentWhereUniqueInput, {
    nullable: false
  })
  where!: PersonDocumentWhereUniqueInput;

  @TypeGraphQL.Field(_type => PersonDocumentCreateWithoutPersonInput, {
    nullable: false
  })
  create!: PersonDocumentCreateWithoutPersonInput;
}
