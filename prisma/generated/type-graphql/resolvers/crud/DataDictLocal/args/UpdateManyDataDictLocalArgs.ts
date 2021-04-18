import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { DataDictLocalUpdateManyMutationInput } from "../../../inputs/DataDictLocalUpdateManyMutationInput";
import { DataDictLocalWhereInput } from "../../../inputs/DataDictLocalWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyDataDictLocalArgs {
  @TypeGraphQL.Field(_type => DataDictLocalUpdateManyMutationInput, {
    nullable: false
  })
  data!: DataDictLocalUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => DataDictLocalWhereInput, {
    nullable: true
  })
  where?: DataDictLocalWhereInput | undefined;
}
